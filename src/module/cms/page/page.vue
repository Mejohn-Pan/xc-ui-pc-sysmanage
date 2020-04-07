<template xmlns:v xmlns:v xmlns:v>
  <div>
    <el-button type="primary" v-on:click="query" size="small">查询</el-button>
    <el-table :data="list" style="width: 100%">
      <el-table-column type="index" width="60"></el-table-column>
      <el-table-column prop="pageName" label="页面名称" width="120"></el-table-column>
      <el-table-column prop="pageAliase" label="别名" width="120"></el-table-column>
      <el-table-column prop="pageType" label="页面类型" width="150"></el-table-column>
      <el-table-column prop="pageWebPath" label="访问路径" width="250"></el-table-column>
      <el-table-column prop="pagePhysicalPath" label="物理路径" width="250"></el-table-column>
      <el-table-column prop="pageCreateTime" label="创建时间" width="180" ></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total" style="float:right"
      :page-size="params.size"
      :current-page="params.page"
      @current-change="changePage">
    </el-pagination>
  </div>

</template>

<script>
  /*导入文件*/
  import * as cmsApi from '../api/cms1'
  export default {
    name: "page.vue"
    ,data() {
      return {
        list: []
        ,total: 50
        ,params: {
          page:2
          ,size:10
        }
      }
    }
    ,methods:{
      query:function () {
        // alert("查询");
      //  调用接口
        cmsApi.page_list(this.params.page,this.params.size).then((result)=>{
        //  将result结果数据赋值给数据模型对象
          this.list = result.queryResult.list;
          this.total = result.queryResult.total;
        })

      }
      ,changePage:function (page) {
        // alert("查询");
        this.params.page = page;
        this.query();
      }
    }
    ,mounted() {
      this.query()
    }
  }
</script>
<style scoped>

</style>
