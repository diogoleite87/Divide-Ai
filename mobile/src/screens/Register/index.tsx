import React, { useRef, useState } from "react";

import { Input } from "../../components/Input";

import {
    Container,
    Header,
    Title, Subtitle,
    Content,
    View,
    Button,
    TextButton,
    RegisterView,
    TextRegister,
    TextRegisterButton,
    TextError,
    TextSuccess
} from './styles'
import { useNavigation } from "@react-navigation/native";
import { UserService } from "../../services/UserService";
import { ButtonBack } from "../../components/ButtonBack";


const Register: React.FC = () => {

    const navigation = useNavigation();

    const emailRef = useRef<any>()
    const passwordRef = useRef<any>()
    const confirmPasswordRef = useRef<any>()

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')

    const createUser = async () => {

        setError(false)

        if (password == confirmPassword) {

            UserService.createUser({ name, email, password }).then(res => {
                setError(false)
                setSuccess(true)
            }).catch(err => {
                setSuccess(false)
                setError(true)
                setErrorMessage(err.response.data.message)
            })

        } else {
            setErrorMessage('Senhas não correspondentes')
            setError(true)
        }
    }

    return (
        <Container>
            <Header>
                <ButtonBack />
                <Title>Cadastrar minha conta.</Title>
                <Subtitle>Que bom ter você por aqui!</Subtitle>
            </Header>

            <Content>
                {error ?
                    <TextError>
                        {errorMessage}
                    </TextError>
                    : success ?
                        <TextSuccess>
                            Cadastro efetuado com sucesso, volte a tela de login para entrar!"
                        </TextSuccess>
                        : null}

                <Input
                    placeholder='Nome'
                    keyboardType='default'
                    onChangeText={(text: string) => setName(text)}
                    returnKeyType="next"
                    onSubmitEditing={() => emailRef.current.focus()}
                />
                <Input
                    inputRef={emailRef}
                    placeholder='Email'
                    keyboardType='email-address'
                    onChangeText={(text: string) => setEmail(text)}
                    returnKeyType="next"
                    onSubmitEditing={() => passwordRef.current.focus()}
                />
                <Input
                    inputRef={passwordRef}
                    placeholder='Senha'
                    secureTextEntry
                    onChangeText={(text: string) => setPassword(text)}
                    returnKeyType="next"
                    onSubmitEditing={() => confirmPasswordRef.current.focus()}
                />
                <Input
                    inputRef={confirmPasswordRef}
                    placeholder='Repita sua Senha'
                    secureTextEntry
                    onChangeText={(text: string) => setConfirmPassword(text)}
                    returnKeyType="done"
                    onSubmitEditing={createUser}
                />

            </Content>

            <View>
                <RegisterView>
                    <TextRegister>Já possui uma conta?</TextRegister>
                    <TextRegisterButton onPress={() => navigation.navigate('Login' as never)}>Entrar</TextRegisterButton>
                </RegisterView>


                <Button onPress={createUser}>
                    <TextButton>Cadastrar</TextButton>
                </Button>
            </View>
        </Container>
    )
}

export { Register }
