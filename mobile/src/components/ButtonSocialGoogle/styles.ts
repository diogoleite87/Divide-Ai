import styled from "styled-components/native";
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
    background-color: ${({ theme }) => theme.COLORS.GRAY6};
    margin-right: ${RFValue(10)}px;
`

export const IconGoogle = styled.Image`
    width: ${RFValue(25)}px;
    height: ${RFValue(25)}px;
`
export const Title = styled.Text`
    font-size: ${RFValue(17)}px;
    margin-left: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`
