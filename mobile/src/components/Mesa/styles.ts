import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
margin-top: ${RFValue(16)}px;
width: 100%;
height: 100px;
padding: 8px;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
align-items: center;
flex-direction: row;
justify-content: space-between;
border-radius: ${RFValue(10)}px
`
export const Content = styled.View`
width: 100%;
height: 100%;
align-items: flex-start;
flex: 1;
flex-direction: column;
justify-content: space-between;
/* background-color: tomato; */
`
export const Title = styled.Text`
font-size: ${RFValue(16)}px;
`
export const Date = styled.Text`
font-size: ${RFValue(12)}px;
`
export const Value = styled.Text`
font-size: ${RFValue(20)}px;
color: ${({ theme }) => theme.COLORS.GREEN2};
`
export const ContentButton = styled.View`
    margin-right: ${RFValue(5)}px;
    flex-direction: row;
`
export const ButtonDelete = styled.TouchableOpacity`
    margin-left: ${RFValue(8)}px;
`

export const ButtonActions = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.BLUE2};
    flex-direction: row;
    align-items: center;
    border-radius: ${RFValue(4)}px;
`
export const TextButtonActions = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${RFValue(14)}px;
    /* text-align: center; */
`
export const MesaList = styled.FlatList`
  width: 100%;
  height: 80%;
`
