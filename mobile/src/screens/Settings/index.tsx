import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ButtonBack } from '../../components/ButtonBack';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/useAuth';
import { Profile } from '../../schemas/Models';
import { UserService } from '../../services/UserService';
import { formatDate } from '../../utils/formatter';
import { ButtonEdit, ButtonSignOut, Container, ContentBody, ContentFooter, ContentHeader, TextBody, TextButton } from './styles';

const Settings: React.FC = () => {

    const [userProfile, setUserProfile] = useState<Profile>({} as Profile)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [newPassword, setNewPassword] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [changeAttributes, setChangeAttributes] = useState<boolean>(true)

    const navigation = useNavigation();

    const { signOut } = useAuth();

    useEffect(() => {
        UserService.getProfile().then(res => {
            setUserProfile(res.data)
            setName(res.data.name)
            setEmail(res.data.email)
        })
    }, [])

    useEffect(() => {
        checkChangeAttributes()
    }, [email, password, newPassword, name])

    const checkChangeAttributes = () => {
        console.log(email)
        console.log(userProfile.email)
        if (email == userProfile.email) {
            console.log('Ok 2')
            setChangeAttributes(true)
        } else {
            console.log('Ok')
            setChangeAttributes(false)
        }
    }

    const editProfile = async () => {


    }

    return (
        <Container>
            <ContentHeader>
                <ButtonBack />
            </ContentHeader>
            <ContentBody>
                <Input
                    placeholder='Nome'
                    keyboardType='default'
                    onChangeText={(text: string) => setName(text)}
                    value={name}
                />
                <Input
                    placeholder='Email'
                    keyboardType='email-address'
                    onChangeText={(text: string) => setEmail(text)}
                    value={email}
                />

                <TextBody>Ingressou em: {formatDate(userProfile.created_at)}</TextBody>
                <TextBody>Útima modificação: {formatDate(userProfile.updated_at)}</TextBody>

            </ContentBody>
            <ContentFooter>
                <ButtonEdit onPress={editProfile} disabled={changeAttributes} >
                    <TextButton>
                        Salvar Alterações
                    </TextButton>
                </ButtonEdit>
                <ButtonSignOut onPress={signOut}>
                    <TextButton>
                        Sair do App
                    </TextButton>
                </ButtonSignOut>

            </ContentFooter>
        </Container>
    );
}

export { Settings }
