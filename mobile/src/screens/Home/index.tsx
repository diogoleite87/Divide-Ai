import React, { useEffect, useState } from 'react'
import { UserService } from '../../services/UserService'
import { Profile } from '../../schemas/Models'
import { useNavigation } from '@react-navigation/native';
import { Container, ContentBody, ContentFooter, ContentHeader, MesaList, SubTitle, Title } from './styles';
import { Mesa, Mesa as MesaHome } from '../../components/Mesa';
import { ButtonConfig } from '../../components/ButtonConfig';

const Home: React.FC = () => {

    const [user, setUser] = useState<Profile | undefined>()

    const navigation = useNavigation();

    useEffect(() => {
        UserService.getProfile().then(res => {
            setUser(res.data)
        }).catch(err => {
            console.log(err.response.data)
        })

    }, [])

    return (
        <Container>
            <ContentHeader>
                <Title>Bem Vindo, {user?.name}!</Title>
                <ButtonConfig />
            </ContentHeader>
            <ContentBody>
                <Mesa />
            </ContentBody>
            <ContentFooter>
                <SubTitle>Desenvolvido por Diogo Leite</SubTitle>
            </ContentFooter>
        </Container >

    )

}

export { Home }

