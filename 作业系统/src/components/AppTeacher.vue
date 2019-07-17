<template>
  <div>
    <!-- {{teacher}} -->
    <a-table
      :rowKey="assignments=>assignments.assignment_id"
      :columns="columns"
      :dataSource="teacher.assignments"
      :pagination="false"
    >
      <template slot="operation" slot-scope="text, record,">
        <!--如果有.work_count数据则显示展开和下载 没有则可以删除 -->
        <div v-if="record.work_count > 0">
          <a-button v-if="!studentsAssignmentShow" @click="studentsAssignmentShow = record" icon="plus-square" type="primary">展开</a-button>
          <a-button v-else @click="studentsAssignmentShow = false" icon="minus-square" type="primary">收起</a-button>
          <a :href="`${downloadPost}all?id=${record.assignment_id}`">
            <a-button icon="download">下载全部</a-button>
          </a>
        </div>
        <div v-else>
          <a-popconfirm
            title="确定要删除作业？"
            @confirm="removeAssignments(record.assignment_id)"
            okText="确定"
            cancelText="取消"
          >
            <a-button icon="delete" type="danger">删除</a-button>
          </a-popconfirm>
        </div>
      </template>
    </a-table>
    <AppTeacherStudent v-if="studentsAssignmentShow" :studentsAssignmentShow="studentsAssignmentShow" :downloadPost="downloadPost"></AppTeacherStudent> 
  </div>
</template>
<script>
import { api } from "../utils/api";
import AppTeacherStudent from "./AppTeacherStudent"
const Post = "http://sandbox_api.estudy.chanke.xyz";
export default {
  name: "teacher",
  props: {
    teacher: Object
  },
  data() {
    return {
      downloadPost: Post + "/teacher/download",
      studentsAssignmentShow: false,
    };
  },
  computed:{
    columns(){
      return [
        {
          title: "课程",
          dataIndex: "org_name"
        },
        {
          title: "作业名称",
          dataIndex: "name"
        },
        {
          title: "开始时间-截止时间",
          customRender(text, record) {
            return `${record.start_time}~${record.end_time}`;
          }
        },
        {
          title: "状态",
          customRender(text, record) {
            return (
              `${record.student_count}个学员/${record.work_count}个提交` +
              (record.work_count > 0 ? ` - ${record.work_update_time}` : "")
            );
          }
        },
        {
          title: "操作",
          scopedSlots: {
            customRender: "operation"
          },
          key: 'operation',
          filteredValue: this.studentsAssignmentShow ? [this.studentsAssignmentShow.assignment_id]:null,
          onFilter(value, record){
            return value === record.assignment_id;
          }
        }
      ]} 
  },
  methods: {
    removeAssignments(id) {
      api.post("/teacher/deleteAssignment", { id }).then(() => {
        let len = this.teacher.assignments.length;
        for(let i = 0; i < len ; i++ ){
          if(this.teacher.assignments[i].assignment_id == id){
            this.teacher.assignments.splice(i,1)
            return;
          }
        }
      });
    }
  },
  components:{
    AppTeacherStudent
  }
};
</script>

<style lang="scss">

</style>
