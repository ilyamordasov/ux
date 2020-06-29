/**
 * Builds the Community Connector config.
 * @return {Config} The Community Connector config.
 * @see https://developers.google.com/apps-script/reference/data-studio/config
 */
function getConfig() {
  var cc = DataStudioApp.createCommunityConnector();
  var config = cc.getConfig();
  
  config.newTextInput()
  .setId('api_url')
  .setName('Enter an API URL to be parsed')
  .setHelpText("We'll retrive data from entered URL")
  .setPlaceholder('')
  .setAllowOverride(true);
  
  config.newTextInput()
  .setId('min_sum')
  .setName('Fill out the MIN sum of guarantee')
  .setHelpText('We will limit the data')
  .setPlaceholder('')
  .setAllowOverride(true)
  
  config.newTextInput()
  .setId('max_sum')
  .setName('Fill out the MAX sum of guarantee')
  .setHelpText('We will limit the data')
  .setPlaceholder('')
  .setAllowOverride(true)

  config.setDateRangeRequired(true);

  return config.build();
}