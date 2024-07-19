import HomeLogo from '../../assets/home.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import OffersCarousel from '../../components/OffersCarousel'
import { Container, Title, ImageHome, CategoriSection } from './home-styles'

export default function Home() {
    return (

        <Container>
            <ImageHome src={HomeLogo} alt="logo da home" />
            <Title>Bem-Vindo!</Title>

            <CategoriSection>
                <CategoryCarousel />
                <OffersCarousel />

            </CategoriSection>

        </Container>

    )
}

