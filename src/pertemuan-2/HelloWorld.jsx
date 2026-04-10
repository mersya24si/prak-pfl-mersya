export default function HelloWorld(){
    const propsUserCard = {
        nama: "Adik Comel",
        nim: "0000",
        tanggal: "2025-01-01"
    }
    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <QuoteText/>
            <UserCard 
                nama="Ariana Grande" 
                nim="101010"
                tanggal={new Date().toLocaleDateString()}
              />
            <UserCard 
                nama="Mersya Meylani" 
                nim="2457301084"
                tanggal={new Date().toLocaleDateString()}
              />
              <UserCard {...propsUserCard}/>
              <img src="img/download.jpg" alt="Gambar" />
        </div>
        
    )
}

function GreetingBinjai(){
    return (
        <small>Salam dari Binjai</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimau mu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}