import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransitionModal: () => void;
}

export function Header(props: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={props.onOpenNewTransitionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    );
}