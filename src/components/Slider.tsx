import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import StepIndicator from '@fcxlabs/react-native-step-indicator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../constants/colors';

const customStyles = {
  stepIndicatorSize: 43,
  currentStepIndicatorSize: 45,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: '#ffffff',
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: '#ffffff',
  stepStrokeUnFinishedColor: '#ffffff',
  separatorFinishedColor: '#090F1F',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#090F1F',
  stepIndicatorUnFinishedColor: '#090F1F',
  stepIndicatorCurrentColor: '#090F1F',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#090F1F',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
};

const icons = [
  'directions-walk',
  'directions-bike',
  'directions-car',
  'home-work',
];

const StepSlider = () => {
  const renderStepIndicator = ({
    position,
    stepStatus,
  }: {
    position: number;
    stepStatus: string;
  }) => {
    let opacity = 1;
    console.log(stepStatus);

    if (stepStatus === 'finished') {
      opacity = 0.7;
    } else if (stepStatus === 'unfinished') {
      opacity = 0.8;
    }

    return (
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          opacity: opacity,
        }}>
        <Icon name={icons[position]} size={20} color={Colors.white} />
      </TouchableOpacity>
    );
  };

  return (
    <StepIndicator
      customStyles={customStyles}
      currentPosition={2}
      renderStepIndicator={renderStepIndicator}
      stepCount={4}
    />
  );
};

export default StepSlider;
