import Link from 'next/link'

const Thumbanil = ({ image_url,as }) => (
    <Link href="[country]/[showId]" as={as}>
        <div className="thumbnail">
            <img src={image_url} className="thumbnail__image" />
        </div>
    </Link>

)

export default Thumbanil