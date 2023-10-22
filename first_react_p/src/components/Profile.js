function Profile(props){
    const {name, lastName} = props
    return <h1>Name: {name} {lastName} {props.children}</h1>
}

export default Profile