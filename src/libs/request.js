const axios = require('axios')
const { adapterAxiosError } = require('../utils/adapters-errors')
const { createRequestOptions } = require('../utils/helpers')

  /**
   * Promise function based on HTTP client
   * @async
   * @function Request
   * @param {object} options - Object
   * @property {string}  options.method - Default GET
   * @property {object}  options.headers - Default { content-type: application/json }
   * @property {string}  options.url - Required
   * @property {string}  options.responseType - Default json
   * @property {object}  options.data - Default null
   * @property {object}  options.params - Default null
   * @return {array} The data from the URL.
   */
   const Request = async (options) => {
    try {
      const opt = createRequestOptions(options)

      const response = await axios(opt)
      const { data } = response
      return data
    } catch (error) {
      adapterAxiosError(error)
    } 
  }

module.exports = Request
