<template>
    <div class="container">
        <div class="content-index">

            <div v-for="subject in results">
                <input v-module="subject.marks">
                <span>
                    Marks for {{ subject.title }}: {{ subject.marks }}
                </span>
            </div>

            <span>
                Total marks are: {{ totalMarks }}
            </span>

        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
      data () {
        return {
          results: [
            { name: 'English', marks: 70 },
            { name: 'Math', marks: 80 },
            { name: 'History', marks: 90 }
          ]
        }
      },
      computed: {
        totalMarks: function() {
          let total = 0;
          for(let i = 0; i < this.results.length; i++){
            total += parseInt(this.results[1].marks);
          }
          return total;
        }
      }
    }

</script>