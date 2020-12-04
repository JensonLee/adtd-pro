<script>


export default {
  props:{
    data:{
      type:Array,
      default:()=>[]
    }
  },
  methods:{
    courseChildNode(childNode){
      if(childNode && childNode===null) return null
      const courseTestButton = (router)=>{
        return (
          <router-link to={'/'+router}>测试</router-link>
        )
      }
      const timelineChild = childNode.map(el => {
        return (
          <div class="ant-timeline-item-child">
            <div class={el.isCurrentChapters?"current-chapters":''}>
              {el.courseName} 
              {el.isCurrentChapters ? <a-icon style="margin-left:8px" type="play-circle" /> :null}
            </div>
            {el.courseTestId ? courseTestButton(el.courseTestId):null}
            {el.courseChild && el.courseChild.length>0 ? this.courseChildNode(el.courseChild):null} 
          </div>
        )
      });
      return timelineChild
    },
    timelineItem(data){
      const timelines = data.map(item=>{
        const timelineChildNode = this.courseChildNode(item.courseChild)
        return (
          <a-timeline-item color={item.isCurrentChapters ===true?"green":"gray"}>
            {item.isCurrentChapters ===true ? <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" /> : null}
            {item.courseChaptersTitle}
            {timelineChildNode}
          </a-timeline-item>
        )
      })
      return timelines
    }
  },
  render(){
    const timelines = this.timelineItem(this.data)
    return (
      <a-timeline>
        {timelines}
      </a-timeline>
    )
  }
}
</script>