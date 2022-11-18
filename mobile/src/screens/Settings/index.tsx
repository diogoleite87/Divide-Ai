import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ButtonBack } from '../../components/ButtonBack';
import { useAuth } from '../../hooks/useAuth';
import { ButtonSignOut, Container, ContentBody, ContentFooter, ContentHeader, TextButtonSignOut } from './styles';

const Settings: React.FC = () => {

    const navigation = useNavigation();

    const { signOut } = useAuth();

    return (
        <Container>
            <ContentHeader>
                <ButtonBack />
            </ContentHeader>
            <ContentBody>

            </ContentBody>
            <ContentFooter>
                <ButtonSignOut onPress={signOut}>
                    <TextButtonSignOut>
                        Sair do App
                    </TextButtonSignOut>
                </ButtonSignOut>

            </ContentFooter>
        </Container>
    );
}

export { Settings }
