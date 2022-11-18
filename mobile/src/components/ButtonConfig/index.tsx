import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { RFValue } from "react-native-responsive-fontsize";
import { Container, Title } from "./style";
import { useNavigation } from "@react-navigation/native";

const ButtonConfig: React.FC = () => {

    const navigation = useNavigation();

    return (
        <Container onPress={() => navigation.navigate('Settings')}>
            <FontAwesomeIcon icon={faUser} size={RFValue(20)} />
            <Title>Perfil</Title>
        </Container>
    )
}

export { ButtonConfig }
