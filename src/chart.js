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
      Ylabel: []
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
    var enc = this.encouraged;
    var yLabels = {
      0 : 'newb',
        2 : 'codecademy',
        4 : 'code-school',
        6 : 'bootcamp',
        8 : 'junior-dev',
        10 : 'mid-level',
        12 : 'senior-dev',
        14 : 'full-stack-dev',
        16 : 'famous-speaker',
        18 : 'unicorn',
        20 : 'harambe'
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
    this.renderChart({
      labels: ['Sept 17', 'Oct 17', 'Nov 17', 'Dec 17', 'Jan 18', 'Feb 18', 'Mar 18', 'Apr 18', 'May 18', 'June 18', 'July 18', 'Aug 18'],
      datasets: [
        {
          label: 'Encouraged £',
          borderColor: '#0099a8',
          borderWidth: 2,
          pointBorderColor: 'rgba(209, 244, 247, 0.8)',
          pointBackgroundColor: 'rgba(255, 255, 255, 1)',
          pointBorderWidth: 1.5,
          backgroundColor: this.gradient,
          data: this.encouraged,
          pointHoverBackgroundColor: '#0099a9',
          pointHoverBorderColor: '',
          pointHoverBorderWidth: 2

        },{
          label: 'Discouraged £',
          borderColor: '#ff4844',
          pointBorderColor: 'rgba(251, 186, 184, 0.8)',
          pointBorderWidth: 1.5,
          borderWidth: 2,
          backgroundColor: this.gradient2,
          data: this.discouraged,
          pointBackgroundColor: '#fff',
          pointHoverBackgroundColor: '#ff4844',
          pointHoverBorderColor: '',
          pointHoverBorderWidth: 2
        }
      ],
      scales: {
      yAxes: [{
        ticks: {
          // beginAtZero: true,
          callback: function(value) {
            for (var i = 0; i < this.encouraged.length; i++){
              // return '£' + enc;
              return yLabels[value];
            }
        }
        },
        gridLines: {
          display: true
        }
      }],
      xAxes: [ {
        gridLines: {
          display: true
        }
      }]
    }
    }, {responsive: true, maintainAspectRatio: false})

  },
}
