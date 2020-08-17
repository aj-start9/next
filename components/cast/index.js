import Thumbnali from './../thumbnail/index'
import Thumbanil from './../thumbnail/index'

const Cast = ({ cast }) => {
    const renderCast = () => {
        return cast.map((castItem, index) => {
            const { image, name } = castItem.person
            return (
                <li key={index}>
                    <Thumbanil image_url={(image && image.medium) || undefined}>

                    </Thumbanil>

                </li>
            )
        })
    }

    return (
        <div>
            <h3>cast</h3>
            <ul>{renderCast()}</ul>
        </div>
    )
}


export default Cast