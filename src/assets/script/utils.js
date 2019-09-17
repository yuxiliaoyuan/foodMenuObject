/* eslint-disable */
export default {
  getURLParameterValue: function (keyName) {
    return decodeURIComponent((new RegExp('[?|&]' + keyName + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ''])[1].replace(/\+/g, '%20')) || null
  }
}
