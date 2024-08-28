function Background(){
    const bg = {border : '1px solid grey',borderRadius : '10px',backgroundColor : 'white',padding :'30px',marginTop:'30px'}
    return <div style = {bg}>
            <Apple />
            <Banana />
    </div>
}
function Apple(){
    const st1 = {display : 'flex',alignItems:'center',justifyContert:'space-between',flexFlow : 'column',backgroundColor:'white'} 
    const st2 ={ color: 'black',fontWeight : '700',fontSize:'24px',marginBottom:'10px' }
    const st3 = {color: 'grey',marginTop :'0px'}
    return <div style={st1}>
            <img src = 'https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80'></img>
            <p style={st2}>Julio Seaza</p>
            <p style={st3}>Julio.Seaza@company.com</p>
    </div>

}
function Banana(){
    const st4 = {display : 'flex',alignItems:'center',justifyContent:'space-around',flexFlow : 'row',backgroundColor : 'white',gap:'10px'} 
    const st5 = {backgroundColor:'white'}
    const st6 = {fontSize: '30px',fontWeight:'700',marginBottom:'0px'}
    const st7 = {color:'grey',paddingBottom:'10px'}
    return <div style = {st4}>
        <div style = {st5}>
            <p style = {st6}>25</p>
            <p style = {st7}>Posts</p>
        </div>
        <div style = {st5}>
            <p style = {st6}>350</p>
            <p style = {st7}>Following</p>
        </div>
        <div style = {st5}>
            <p style = {st6}>1.5K</p>
            <p style = {st7}>Followers</p>
        </div>
    </div>
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<Background />);     