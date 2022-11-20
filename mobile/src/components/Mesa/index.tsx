import React, { useEffect, useState } from "react";
import { formatDate } from "../../utils/formatter";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { RFValue } from "react-native-responsive-fontsize";

import { ButtonActions, ButtonDelete, Container, Content, ContentButton, Date, TextButtonActions, Title, Value, MesaList } from './styles'
import theme from "../../styles/theme";
import { Mesa as MesaType } from "../../schemas/Models";
import { MesaService } from "../../services/MesaService";


const Mesa: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [refresh, setRefresh] = useState<boolean>(false)
    const [mesas, setMesas] = useState<MesaType[]>()

    const deleteMesa = async (id: number) => {

        setLoading(true)
        await MesaService.deleteMesa(id).then(res => {
        })

        setLoading(false)
    }

    useEffect(() => {
        MesaService.getMesas().then(res => {
            setMesas(res.data)
        })
    }, [])


    return (
        <MesaList
            ListHeaderComponent={<Title>Mesas Adicionadas</Title>}
            data={mesas}
            renderItem={({ item }) =>

                <Container>
                    <Content>
                        <Title>Nome: {item.name}</Title>
                        <Date>Data: {formatDate(item.created_at)}</Date>
                        <Value>R$ {item.value}</Value>
                    </Content>
                    <ContentButton>
                        <ButtonActions>
                            <FontAwesomeIcon icon={faPlus} size={RFValue(8)} color={theme.COLORS.WHITE} />
                            <TextButtonActions> Abrir </TextButtonActions>
                        </ButtonActions>
                        <ButtonDelete onPress={() => deleteMesa(item.id)}>
                            <FontAwesomeIcon icon={faTrash} size={RFValue(28)} color={theme.COLORS.RED} />
                        </ButtonDelete>
                    </ContentButton>
                </Container>


            }
            contentContainerStyle={{ width: '100%' }}
            showsVerticalScrollIndicator={false}
        />

    )
}

export { Mesa }
