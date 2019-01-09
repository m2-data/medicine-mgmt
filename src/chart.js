import { Line } from 'vue-chartjs'
import {mapGetters, mapMutations, mapActions, mapState} from 'vuex'

export default {
  extends: Line,
//   props: {
//     chartdata: {
//       type: Object,
//       default: null
//     },
//     options: {
//       type: Object,
//       default: null
//     }
//   },
  created (){
    console.log('created')
    for (var i = 0; i < this.links.length; i++){
        if (this.code == this.links[i].practice_name) {
          this.encouraged = this.links[i].encouraged_spend
          this.discouraged = this.links[i].discouraged_spend
          this.ratio = this.links[i].spend_ratio
          this.Scode = this.links[i].practice_code
          //console.log(this.encouraged, this.ratio, this.discouraged)
        }
      }
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
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#FC2525',
          data: [40, 39, 10, 40, 39, 80, 40]
        },{
          label: 'Data Two',
          backgroundColor: '#05CBE1',
          data: [60, 55, 32, 10, 2, 12, 53]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})

  }
}
