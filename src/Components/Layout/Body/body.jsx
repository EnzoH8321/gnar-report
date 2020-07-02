import React from "react";

import Card from "../../UI/Card/card.jsx";

import "./body.css";

function Body(props) {
  const { pushSurfSpot, pushMapInfo } = props;

  return (
    <Card
      pushDayMonth={pushSurfSpot.dayMonth}
      pushMap={pushMapInfo}
      pushTimespot={pushSurfSpot.localTimestamp0}
      pushConditionRating={pushSurfSpot.conditionRating0}
      pushFadedRating={pushSurfSpot.fadedRating0}
      pushSolidRating={pushSurfSpot.solidRating0}
      pushMinHeight={pushSurfSpot.minBreakingHeight0}
      pushMaxHeight={pushSurfSpot.maxBreakingHeight0}
      pushUnit={pushSurfSpot.unit}
      pushPrimaryHeight={pushSurfSpot.primaryHeight0}
      pushPrimaryPeriod={pushSurfSpot.primaryPeriod0}
      pushPrimaryDirection={pushSurfSpot.primaryDirection0}
      pushPrimaryCompass={pushSurfSpot.primaryCompassDirection0}
      pushSecondaryHeight={pushSurfSpot.secondaryHeight0}
      pushSecondaryPeriod={pushSurfSpot.secondaryPeriod0}
      pushSecondaryDirection={pushSurfSpot.secondaryDirection0}
      pushSecondaryCompassDirection={pushSurfSpot.secondaryCompassDirection0}
      pushWindSpeed={pushSurfSpot.windSpeed0}
      pushWindDirection={pushSurfSpot.windDirection0}
      pushWindCompass={pushSurfSpot.windCompassDirection0}
      pushWindChill={pushSurfSpot.windChill0}
      pushWindUnit={pushSurfSpot.windUnit}
      pushTemp={pushSurfSpot.temperature0}
      pushTempUnit={pushSurfSpot.temperatureUnit}
      pushTimespot1={pushSurfSpot.localTimestamp1}
      pushConditionRating1={pushSurfSpot.conditionRating1}
      pushFadedRating1={pushSurfSpot.fadedRating1}
      pushSolidRating1={pushSurfSpot.solidRating1}
      pushMinHeight1={pushSurfSpot.minBreakingHeight1}
      pushMaxHeight1={pushSurfSpot.maxBreakingHeight1}
      pushUnit1={pushSurfSpot.unit}
      pushPrimaryHeight1={pushSurfSpot.primaryHeight1}
      pushPrimaryPeriod1={pushSurfSpot.primaryPeriod1}
      pushPrimaryDirection1={pushSurfSpot.primaryDirection1}
      pushPrimaryCompass1={pushSurfSpot.primaryCompassDirection1}
      pushSecondaryHeight1={pushSurfSpot.secondaryHeight1}
      pushSecondaryPeriod1={pushSurfSpot.secondaryPeriod1}
      pushSecondaryDirection1={pushSurfSpot.secondaryDirection1}
      pushSecondaryCompassDirection1={pushSurfSpot.secondaryCompassDirection1}
      pushWindSpeed1={pushSurfSpot.windSpeed1}
      pushWindDirection1={pushSurfSpot.windDirection1}
      pushWindCompass1={pushSurfSpot.windCompassDirectio1}
      pushWindChill1={pushSurfSpot.windChill1}
      pushWindUnit1={pushSurfSpot.windUnit}
      pushTemp1={pushSurfSpot.temperature1}
      pushTempUnit1={pushSurfSpot.temperatureUnit}
      pushTimespot2={pushSurfSpot.localTimestamp2}
      pushConditionRating2={pushSurfSpot.conditionRating2}
      pushFadedRating2={pushSurfSpot.fadedRating2}
      pushSolidRating2={pushSurfSpot.solidRating2}
      pushMinHeight2={pushSurfSpot.minBreakingHeight2}
      pushMaxHeight2={pushSurfSpot.maxBreakingHeight2}
      pushUnit2={pushSurfSpot.unit}
      pushPrimaryHeight2={pushSurfSpot.primaryHeight2}
      pushPrimaryPeriod2={pushSurfSpot.primaryPeriod2}
      pushPrimaryDirection2={pushSurfSpot.primaryDirection2}
      pushPrimaryCompass2={pushSurfSpot.primaryCompassDirection2}
      pushSecondaryHeight2={pushSurfSpot.secondaryHeight2}
      pushSecondaryPeriod2={pushSurfSpot.secondaryPeriod2}
      pushSecondaryDirection2={pushSurfSpot.secondaryDirection2}
      pushSecondaryCompassDirection2={pushSurfSpot.secondaryCompassDirection2}
      pushWindSpeed2={pushSurfSpot.windSpeed2}
      pushWindDirection2={pushSurfSpot.windDirection2}
      pushWindCompass2={pushSurfSpot.windCompassDirection2}
      pushWindChill2={pushSurfSpot.windChill2}
      pushWindUnit2={pushSurfSpot.windUnit}
      pushTemp2={pushSurfSpot.temperature2}
      pushTempUnit2={pushSurfSpot.temperatureUnit}
      pushTimespot3={pushSurfSpot.localTimestamp3}
      pushConditionRating3={pushSurfSpot.conditionRating3}
      pushFadedRating3={pushSurfSpot.fadedRating3}
      pushSolidRating3={pushSurfSpot.solidRating3}
      pushMinHeight3={pushSurfSpot.minBreakingHeight3}
      pushMaxHeight3={pushSurfSpot.maxBreakingHeight3}
      pushUnit3={pushSurfSpot.unit}
      pushPrimaryHeight3={pushSurfSpot.primaryHeight3}
      pushPrimaryPeriod3={pushSurfSpot.primaryPeriod3}
      pushPrimaryDirection3={pushSurfSpot.primaryDirection3}
      pushPrimaryCompass3={pushSurfSpot.primaryCompassDirection3}
      pushSecondaryHeight3={pushSurfSpot.secondaryHeight3}
      pushSecondaryPeriod3={pushSurfSpot.secondaryPeriod3}
      pushSecondaryDirection3={pushSurfSpot.secondaryDirection3}
      pushSecondaryCompassDirection3={pushSurfSpot.secondaryCompassDirection3}
      pushWindSpeed3={pushSurfSpot.windSpeed3}
      pushWindDirection3={pushSurfSpot.windDirection3}
      pushWindCompass3={pushSurfSpot.windCompassDirection3}
      pushWindChill3={pushSurfSpot.windChill3}
      pushWindUnit3={pushSurfSpot.windUnit}
      pushTemp3={pushSurfSpot.temperature3}
      pushTempUnit3={pushSurfSpot.temperatureUnit}
      pushTimespot4={pushSurfSpot.localTimestamp4}
      pushConditionRating4={pushSurfSpot.conditionRating4}
      pushFadedRating4={pushSurfSpot.fadedRating4}
      pushSolidRating4={pushSurfSpot.solidRating4}
      pushMinHeight4={pushSurfSpot.minBreakingHeight4}
      pushMaxHeight4={pushSurfSpot.maxBreakingHeight4}
      pushUnit4={pushSurfSpot.unit}
      pushPrimaryHeight4={pushSurfSpot.primaryHeight4}
      pushPrimaryPeriod4={pushSurfSpot.primaryPeriod4}
      pushPrimaryDirection4={pushSurfSpot.primaryDirection4}
      pushPrimaryCompass4={pushSurfSpot.primaryCompassDirection4}
      pushSecondaryHeight4={pushSurfSpot.secondaryHeight4}
      pushSecondaryPeriod4={pushSurfSpot.secondaryPeriod4}
      pushSecondaryDirection4={pushSurfSpot.secondaryDirection4}
      pushSecondaryCompassDirection4={pushSurfSpot.secondaryCompassDirection4}
      pushWindSpeed4={pushSurfSpot.windSpeed4}
      pushWindDirection4={pushSurfSpot.windDirection4}
      pushWindCompass4={pushSurfSpot.windCompassDirection4}
      pushWindChill4={pushSurfSpot.windChill4}
      pushWindUnit4={pushSurfSpot.windUnit}
      pushTemp4={pushSurfSpot.temperature4}
      pushTempUnit4={pushSurfSpot.temperatureUnit}
    />
  );
}

export default Body;
