import styled from "styled-components/native";
import { Fontisto } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'

export const Button = styled(RectButton)`
    width: ${RFValue(130)}px;
    height: ${RFValue(60)}px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 16px;
    border-radius: ${RFValue(5)}px;
    box-shadow: 1px 3px 3px rgb(0, 0, 0, 0.2);
    background-color: ${({ theme }) => theme.COLORS.BLUE};
    margin-right: ${RFValue(10)}px;
`

export const IconFacebook = styled(Fontisto)`
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`
export const Title = styled.Text`
    font-size: ${RFValue(17)}px;
    margin-left: ${RFValue(10)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`
