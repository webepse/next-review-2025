import styles from './styles.module.css'
import Heading from '@/components/Heading'

export default function AboutPage()
{
    return (
        <>
            <Heading>About us</Heading>
            <p className={styles.about}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos architecto culpa ex sed est commodi porro facilis voluptatem quaerat eius inventore omnis maxime quod adipisci eum rem officiis rerum eveniet eaque, tenetur sunt fugit. Quos aliquid nihil quis corporis quisquam?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos architecto culpa ex sed est commodi porro facilis voluptatem quaerat eius inventore omnis maxime quod adipisci eum rem officiis rerum eveniet eaque, tenetur sunt fugit. Quos aliquid nihil quis corporis quisquam?</p>
        </>
    )
}