'use client'
// les autres composants imbriqués non plus besoin de use client
import ShareLinkButton from "./ShareLinkButton"

export default function ShareButtons() {
    return (
        <div>
            {/* <ShareLinkButton /> | [Twitter] | [Facebook] */}
            <ShareLinkButton />
        </div>
    )
}
