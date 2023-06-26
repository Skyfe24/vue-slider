console.log("Vue ok", Vue);
//ogni todo sarà un oggetto, formato da almeno due proprietà:
//- text, una stringa che indica il testo del todo
//- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
//MILESTONE 1
//Stampare all'interno di una lista HTML un item per ogni todo.
//Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.




const app = Vue.createApp({
  data() {
    return {
        CurrentIndex: 0,
      images: [
        { id: 1, url: "img/01.webp" },
        { id: 2, url: "img/02.webp" },
        { id: 3, url: "img/03.webp" },
        { id: 4, url: "img/04.webp" },
        { id: 5, url: "img/05.webp" },
      ],
    };
  },
  
  methods:{
    
    setCurrentIndex(targetIndex){
      this.CurrentIndex = targetIndex
    },
    
    goNext(){
      this.CurrentIndex++;
      if(this.isLast)
      {this.CurrentIndex = 0}

    },
    goPrev(){
      if(this.isFirst){
        this.CurrentIndex = this.images.length
      }
      this.CurrentIndex--;

    }
  },

  computed:{
    isLast(){
      return this.CurrentIndex === this.images.length;
    },

    isFirst(){
      return this.CurrentIndex === 0;
    },
  }
});
app.mount("#root");


