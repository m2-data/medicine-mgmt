import { Line } from 'vue-chartjs'
import {mapGetters, mapState} from 'vuex'



export default {
  extends: Line,
  data () {
    return {

      gradient: null,
      gradient2: null,
      encouraged: [],
      discouraged: [],
      data: {
        type: 'line',
        labels: ['Sept 17', 'Oct 17', 'Nov 17', 'Dec 17', 'Jan 18', 'Feb 18', 'Mar 18', 'Apr 18', 'May 18', 'June 18', 'July 18', 'Aug 18'],
        datasets: [
            {
                label: "Encouraged",
                data: this.encouraged,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                    "rgba(255, 159, 64, 0.6)"
                ],
                borderColor: [
                    "rgba(255,99,132,1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)"
                ],
                borderWidth: 1
            }
        ]
    },
    options: {
      scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                    // callback: function(value, index, values) {
                    //   return this.yLabels[value];
                  // }
                }
            }
        ]
    }
    }
    }
  },
  created (){
    //console.log('created')
    for (var i = 0; i < this.links.length; i++){
      if (this.code == this.links[i].practice_name) {
        this.encouraged = this.links[i].encouraged_spend
        this.discouraged = this.links[i].discouraged_spend
        this.ratio = this.links[i].spend_ratio
        this.Scode = this.links[i].practice_code

      } else {
        this.surgName = localStorage.getItem('myCode')
        if (this.surgName == this.links[i].practice_name) {
          this.encouraged = this.links[i].encouraged_spend
          this.discouraged = this.links[i].discouraged_spend
        }
      }
    }

    //add £ to data
    // this.encouraged = this.encouraged.map(item => '£' + item)
    // console.log(this.encouraged)


    // {
    //   item = '£' + item
    //   return item
      
    // })

    },
    computed: {
    ...mapGetters([
      'countLinks',
      'returnJson'
      ]),
    ...mapState([
      'title',
      'links',
      'code'
    ]),

  },
  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

    this.gradient.addColorStop(0, 'rgba(2, 189, 208, 0.6)')
    this.gradient.addColorStop(0.5, 'rgba(2, 189, 208, 0.3)');
    this.gradient.addColorStop(1, 'rgba(2, 189, 208, 0)');
    
    this.gradient2.addColorStop(0, 'rgba(255, 130, 128, 0.9)')
    this.gradient2.addColorStop(0.5, 'rgba(255, 130, 128, 0.6)');
    this.gradient2.addColorStop(1, 'rgba(255, 130, 128, 0)');
    this.renderChart( this.data, this.options )
      

  },
}



// var chart = new Chart(ctx, {
//   type: 'line',
//   data: data,
//   options: {
//       scales: {
//           yAxes: [{
//               ticks: {
//                   // Include a dollar sign in the ticks
//                   callback: function(value, index, values) {
//                       return '$' + value;
//                   }
//               }
//           }]
//       }
//   }
// });


