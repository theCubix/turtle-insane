// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Turtle Insane',
  plugins: [
    {
      use: '@gridsome/source-datocms',
      options: {
        apiToken: 'dd5bcc1c062f111c941b2285998462', // required
        previewMode: false,
        apiUrl: 'https://site-api.datocms.com',
        typeName: 'DatoCms'
      }
    }
  ]
}