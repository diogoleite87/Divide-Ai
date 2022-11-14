import React from "react";
import { SafeAreaView, Text } from 'react-native'
import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Description,
    ViewButton
} from './styles'

const Login: React.FC = () => {

    return (
        <SafeAreaView>
            <Container>

                <ContentHeader>


                    <Title>Seja bem vindo(a) {"\n"}Divide Aí</Title>

                    <Description>Entrar</Description>

                    <ViewButton></ViewButton>

                </ContentHeader>

                <ContentBody>

                </ContentBody>

                <ContentFooter>

                </ContentFooter>
            </Container>
        </SafeAreaView>
    )
}

export { Login }
