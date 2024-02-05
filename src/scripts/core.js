$(function () {
  $.validator.messages = {
    required: 'Обязательное поле',
    remote: 'Пожалуйста, исправьте это поле.',
    email: 'Пожалуйста, введите действительный адрес электронной почты.',
    url: 'Пожалуйста, введите корректный адрес.',
    equalTo: 'Пожалуйста, введите то же значение еще раз.',
    date: 'Пожалуйста, введите правильную дату.',
    minlength: $.validator.format('Введите не менее {0} символов.'),
    // dateISO: 'Пожалуйста, введите действительную дату (ISO).',
    // number: 'Пожалуйста введите правильное число.',
    // digits: 'Пожалуйста, вводите только цифры.',
    // maxlength: $.validator.format('Введите не более {0} символов.'),
    // rangelength: $.validator.format('Введите значение длиной от {0} до {1} символов.'),
    // range: $.validator.format('Введите значение от {0} до {1}.'),
    // max: $.validator.format('Введите значение меньше или равное {0}.'),
    // min: $.validator.format('Введите значение, большее или равное {0}.'),
    // step: $.validator.format('Введите число, кратное {0}.')
  }

  function bindAjaxForm() {
    var form = $('form.j-ajaxForm')
    var validator = form.validate({
      unhighlight: function (element) {
        var name = element.name
        $('.j-err_' + form.attr('id') + '_' + name).removeClass('_error')
        $('.j-err_' + form.attr('id') + '_' + name + '_TEXT').html('')
      },
      errorPlacement: function (error, element) {
        var name = element.attr('name')
        $('.j-err_' + form.attr('id') + '_' + name).addClass('_error')
        $('.j-err_' + form.attr('id') + '_' + name + '_TEXT').html(error.html())
        return true
      }
    })
    var options = {
      success: onAjaxSubmitForm, // post-submit callback
      error: function (_, _, _, form) {
        form[0].dispatchEvent(new Event('error'))
      },
      dataType: 'json',
      beforeSubmit: function (arr, $form, options) {
        var canSubmit = validator.form()
        if (canSubmit) {
          $form[0]?.dispatchEvent(new CustomEvent('loading', {detail: true}))
        }
        return canSubmit
      },
      complete: function () {
        form[0]?.dispatchEvent(new CustomEvent('loading', {detail: false}))
      }
    }
    // вешаем ajax form submit

    var onResetValidate = function () {
      validator.resetForm()
    }
    form.on('reset', onResetValidate)
    form.ajaxForm(options)
  }

  function onAjaxSubmitForm(response, statusText, xhr, form) {
    $('#email').val('')
    $('._error').each(function (i) {
      $(this).removeClass('_error')
    })
    $('.form-error').html('').hide()
    var button = form.find('[type="submit"]')
    if (typeof BX !== 'undefined') {
      BX.closeWait()
    }
    $.event.trigger({type: 'button_loading.stop', button: button})
    if (statusText == 'success') {
      if (response.submitOn) {
        form[0]?.dispatchEvent(new Event('success'))
        if (response.redirectUrl) {
          if (typeof response.openerOn !== 'undefined' && response.openerOn) {
            window.opener.location = response.redirectUrl
            window.opener.location.reload()
            window.close()
          } else {
            window.location = response.redirectUrl
          }
        } else if (response.reloadOn) {
          window.location.reload()
        } else if (response.callFunc) {
          try {
            (function (e) {
              var e = response
              eval(response.callFunc + '(e, form);')
            })()
          } catch (e) {

          }
        } else {
          $(form)[0].reset()
          if ($('.j-' + $(form).attr('id') + '_success').length > 0) {
            var frnParent = $(form).parents('.j-popup-form')
            if (frnParent.length > 0) {
              frnParent[0].dispatchEvent(new CustomEvent('success'))
            } else {
              document.querySelector('.j-' + $(form).attr('id') + '_success').dispatchEvent(new Event('open'))
            }
          }
        }
      }
      if (typeof response.captcha_sid !== 'undefined') {
        $('#' + $(form).attr('id') + ' .j-captcha-img').each(function (i, el) {
          $(el).attr('src', response.captcha_url)
        })
        $('#' + $(form).attr('id') + ' input[name="captcha_sid"]').val(response.captcha_sid)
      }
      if (typeof response.sessid !== 'undefined') {
        $('#' + $(form).attr('id') + ' input[name="sessid"]').val(response.sessid)
      }
      if (response.errors) {
        if (typeof grecaptcha !== 'undefined' && $('#' + $(form).attr('id') + '_gRecaptcha').length > 0) {
          if (window.grecaptcha) grecaptcha.reset()
        }
        $('.j-err_' + $(form).attr('id') + '_' + 'submitbutton').html('Проверьте правильность заполнения формы').show()
        for (var ctrlErr in response.errors) {
          if ($(form).hasClass('j-alerts')) {
            $.event.trigger({type: 'flashMessage', txt: response.errors[ctrlErr], variant: 'error'})
          }
          $('.j-err_' + $(form).attr('id') + '_' + ctrlErr).addClass('_error')
          $('.j-err_' + $(form).attr('id') + '_' + ctrlErr + '_TEXT').html(response.errors[ctrlErr]).show()
          if (ctrlErr === 'captcha') form[0].dispatchEvent(new CustomEvent('error', {detail: response.errors[ctrlErr]}))
        }
      }
    }
  }

  function bindAjaxFormHtml() {
    var form = $('form.j-ajaxForm-html')
    var resultBlock = $('#' + form.attr('data-html'))

    var options = {
      success: function (response) {
        resultBlock.html(response)
      },
      error: function () {
        form[0]?.dispatchEvent(new CustomEvent('error', {detail: 'some error'}))
      },
      complete: function () {
        form[0]?.dispatchEvent(new CustomEvent('loading', {detail: false}))
      },
      beforeSubmit: function () {
        form[0]?.dispatchEvent(new CustomEvent('loading', {detail: true}))
        return true
      }
    }
    form.ajaxForm(options)
  }

  bindAjaxFormHtml()
  bindAjaxForm()
})
