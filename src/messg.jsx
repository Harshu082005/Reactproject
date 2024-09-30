
export default function Messg({name,textcolor}){
let styles={color: textcolor , fontSize: '100px'};
return(
    <>
    <p style={styles}>Hello! {name}</p>
    </>

);
}
