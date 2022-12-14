import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  padding: ${RFValue(16)}px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUNDLIGHT};
`
export const ContentHeader = styled.View`
  margin-top: ${RFValue(getStatusBarHeight(true))}px;
  width: 100%;
`
export const ContentBody = styled.View`
  width: 100%;
  margin-bottom: ${RFValue(20)}px;
  /* align-items: center; */
`
export const ContentFooter = styled.View`
  width: 100%;
  margin-bottom: ${RFValue(20)}px;
  flex-direction: column;
  align-items: center;
`
export const ButtonSignOut = styled.TouchableOpacity`
  width: 50%;
  height: ${RFValue(35)}px;
  margin-top: ${RFValue(5)}px;
  border-radius: ${RFValue(14)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.RED};
`
export const TextButton = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE}
`
export const TextBody = styled.Text`

`

export const ButtonEdit = styled.TouchableOpacity`
  width: 50%;
  height: ${RFValue(35)}px;
  margin-top: ${RFValue(20)}px;
  border-radius: ${RFValue(14)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BLUE1};
`
