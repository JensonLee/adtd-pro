<template>
  <div class="antd-panel">
    <a-tree
            :show-line="showLine"
            :default-expanded-keys="['0-0-0', '0-0-1', '0-0-2']"
            @select="onSelect"
            :tree-data="treeData"
    >
      <template slot="custom" slot-scope="item">
        <span @mouseover="handleOver(item)" @mouseout="handleOut(item)">
          <span class="tree-node-title">{{ item.title }}</span>
          <span v-show="item.isShow"  class="tree-node-handle">
            <a-tooltip placement="bottom" title="新增子组织" >
              <a-icon type="plus-circle-o" @click="handleAdd(item)" />
            </a-tooltip>
            <a-tooltip placement="bottom" title="修改">
              <a-icon type="edit" />
            </a-tooltip>
            <a-tooltip placement="bottom" title="删除">
              <a-icon type="minus-circle-o" />
            </a-tooltip>
          </span>
        </span>

      </template>
    </a-tree>
  </div>
</template>

<script>
    const treeData = [
        {
            title: '0-0',
            key: '0-0',
            scopedSlots: { title: 'custom' },
            children: [
                {
                    title: '0-0-0',
                    key: '0-0-0',
                    scopedSlots: { title: 'custom' },
                    children: [
                        { title: '0-0-0-0', key: '0-0-0-0' ,scopedSlots: { title: 'custom' }},
                        { title: '0-0-0-1', key: '0-0-0-1' ,scopedSlots: { title: 'custom' }},
                        { title: '0-0-0-2', key: '0-0-0-2' ,scopedSlots: { title: 'custom' }},
                    ],
                },
                {
                    title: '0-0-1',
                    key: '0-0-1',
                    scopedSlots: { title: 'custom' },
                    children: [
                        { title: '0-0-1-0', key: '0-0-1-0' ,scopedSlots: { title: 'custom' }},
                        { title: '0-0-1-1', key: '0-0-1-1' ,scopedSlots: { title: 'custom' }},
                        { title: '0-0-1-2', key: '0-0-1-2' ,scopedSlots: { title: 'custom' }},
                    ],
                },
                {
                    title: '0-0-2',
                    key: '0-0-2',
                    scopedSlots: { title: 'custom' }
                },
            ],
        },
        {
            title: '0-1',
            key: '0-1',
            scopedSlots: { title: 'custom' },
            children: [
                { title: '0-1-0-0', key: '0-1-0-0' ,scopedSlots: { title: 'custom' }},
                { title: '0-1-0-1', key: '0-1-0-1' ,scopedSlots: { title: 'custom' }},
                { title: '0-1-0-2', key: '0-1-0-2' ,scopedSlots: { title: 'custom' }},
            ],
        },
        {
            title: '0-2',
            key: '0-2',
            scopedSlots: { title: 'custom' }
        },
    ];
    export default {
        data() {
            return {
                showLine: true,
                expandedKeys: ['0-0-0', '0-0-1'],
                autoExpandParent: true,
                checkedKeys: ['0-0-0'],
                selectedKeys: [],
                treeData,
            };
        },
        methods: {
            onSelect(selectedKeys, info) {
                console.log('selected', selectedKeys, info);
            },
            handleAdd(item){
                console.log(item);
            },
            handleOver(item){
                item.dataRef.isShow=true
                console.log(item);
            },
            handleOut(item){
                item.dataRef.isShow=false
            },
            filterTreeData(arr){
                arr.map(t=>{
                    if(t.children && t.children.length){
                        this.filterTreeData(t.children)
                    }
                    return this.$set(t,'isShow',false)
                })
            }

        },
        created(){
            this.filterTreeData(this.treeData)
        }
    };
</script>

<style lang="less">
  .tree-node-title{
    display: inline-block;
    margin-right: 8px;
  }
  .tree-node-handle{
    .anticon{
      margin: 4px;
    }
  }
</style>