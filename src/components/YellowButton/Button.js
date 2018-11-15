import React from 'react';
import {Button, cnButton} from '../Button/Button';
import {withBemMod} from '@bem-react/core';
import './YellowButton.scss'

export default withBemMod(cnButton, {yellow: true})(Button);