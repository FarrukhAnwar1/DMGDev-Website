# DMGDev-Website
Source code for the DMGDev website.

Website Homepage: https://farrukhanwar.pythonanywhere.com/

* ## Clash Royale

  * ### Ladder Battles Endpoint

    * _**/api/clash/win\_percentages**?**type**={Response Type}&**player\_tag**={Player Tag}_
      * If _**type**_ is omitted, then website automatically defaults to return JSON data

    * #### HTML Version: type=html
      * Shows an HTML formatted page that includes:
        * _Player Name_
        * _Player Tag_
        * _Average Ladder Win %_
        * _Average Card Level Difference_
        * _Match Percentage Pie Chart_
        * _Win Percentage Column Chart_
        * _Match and Win Percentage Table_
    * #### JSON Version: type=json
      * Returns JSON formmated data that includes:
         * _Player Name_ (**string**)
         * _Player Tag_ (**string**)
         * _Average Ladder Win %_ (**float**)
         * _Average Card Level Difference_ (**float**)
         * _Match Percentages against each King Tower level_ (**list**)
         * _Win Percentages against each King Tower level_ (**list**)
         * _Total Match Numbers against each King Tower level_ (**list**)
         * _Color Gradient from Red to Lime Green_ (**list**)
         * _Average Path of Legends Win %_ (**float**)
         * _Average Path of Legends Card Level Difference_ (**float**) 
