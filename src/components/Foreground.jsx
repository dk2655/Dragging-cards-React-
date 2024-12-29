import React, { useRef } from 'react'
import Cards from './Cards'

function foreground() {
    const ref = useRef(null);

    //const daata = [desccription,filesize,closeOrDownloadbutton, tagDetails];

    const data = [
        { desc: "lorem lorem lorem lorem loremloremlorem lorem lorem  lorem", filesize: ".9mb", close: true, tagdetails: { isopen: true, tagTitle: "Download Now", tagColor: "green" }, },

        { desc: "lorem lorem lorem lorem loremloremlorem lorem lorem  lorem", filesize: ".9mb", close: true, tagdetails: { isopen: true, tagTitle: "Download Now", tagColor: "green" }, },

        { desc: "lorem lorem lorem lorem loremloremlorem lorem lorem  lorem", filesize: ".9mb", close: true, tagdetails: { isopen: true, tagTitle: "Download Now", tagColor: "green" }, },
    ];


    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5'>

            {data.map((item, index) => (
                <Cards data={item} reference={ref} />
            ))}


        </div>
    )
}

export default foreground