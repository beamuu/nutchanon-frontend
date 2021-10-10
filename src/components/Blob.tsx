export default function Blob(props: any) {
    return (
        <div style={{ width: props.size ? props.size : "100%" , height: props.size ? props.size : "100%" }}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#0F62FE" d="M31.6,-35.5C47.8,-24.1,72.5,-20.6,82.3,-8.2C92,4.3,86.8,25.7,73.9,37.6C61,49.4,40.3,51.7,24.9,48.8C9.5,45.9,-0.7,37.9,-13,34.1C-25.2,30.3,-39.6,30.7,-42.9,24.8C-46.2,18.9,-38.5,6.8,-36.7,-7C-34.9,-20.7,-39,-36.1,-33.9,-49.4C-28.7,-62.7,-14.4,-74.1,-3.3,-70.1C7.7,-66.1,15.4,-46.9,31.6,-35.5Z" transform="translate(100 100)" />
            </svg>
        </div>
    )
}