class Secondarticle extends HTMLElement {
    connectedCallback(){
      this.render();
    }
    render() {
      this.innerHTML = `
      <div class="card ">
        <div class="card-body">
          <h5>Selamat Datang di Web Movie</h5>
          <p>Web Movie menginformasikan data film Indonesia dan Internasional. Web ini hanya menampilkan data hanya 10 list saja. Untuk melihat detail film yang anda cari, tuliskan nama film secara spesifik agar datanya muncul.</p>
          <img src="./image/main.jpg">
        </div>
      </div> 
      `;
    }
   }    
customElements.define("second-arcticle", Secondarticle);

