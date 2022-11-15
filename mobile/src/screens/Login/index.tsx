import React from "react";
import { SafeAreaView, Text } from 'react-native'

import { ButtonSocialGoogle } from "../../components/ButtonSocialGoogle";
import { ButtonSocialFacebook } from "../../components/ButtonSocialFacebook";

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

                    <Description>Entrar com redes sociais</Description>

                    <ViewButton>
                        <ButtonSocialGoogle title="Google" />
                        <ButtonSocialFacebook title="Facebook" iconName="facebook" />
                    </ViewButton>

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
