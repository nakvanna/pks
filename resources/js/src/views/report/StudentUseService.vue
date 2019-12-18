<!-- =========================================================================================
    File Name: AgGridTable.vue
    Description: Ag Grid table
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div id="ag-grid-demo">
    <vx-card>

      <!-- TABLE ACTION ROW -->
      <div class="flex flex-wrap justify-between items-center">

        <!-- ITEMS PER PAGE -->
        <div class="mb-4 md:mb-0 mr-4 ag-grid-table-actions-left">
          <vs-dropdown vs-trigger-click class="cursor-pointer">
            <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
              <span class="mr-2">{{ currentPage * paginationPageSize - (paginationPageSize - 1) }} - {{ service_info_extract.length - currentPage * paginationPageSize > 0 ? currentPage * paginationPageSize : service_info_extract.length }} of {{ service_info_extract.length }}</span>
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>
            <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
            <vs-dropdown-menu>

              <vs-dropdown-item @click="gridApi.paginationSetPageSize(20)">
                <span>20</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(50)">
                <span>50</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(100)">
                <span>100</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(250)">
                <span>250</span>
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>

        <!-- TABLE ACTION COL-2: SEARCH & EXPORT AS CSV -->
        <div class="flex flex-wrap items-center justify-between ag-grid-table-actions-right">
          <h3>ចំនួនដែលបានជ្រើស:{{selected.length}}</h3>
          <vs-input class="ml-4 mb-4 md:mb-0 mr-4" v-model="searchQuery" @input="updateSearchQuery" placeholder="Search..." />
          <vs-button class="mb-4 md:mb-0" @click="gridApi.exportDataAsCsv()">Export as CSV</vs-button>
        </div>
      </div>
      <ag-grid-vue
        :gridOptions="gridOptions"
        class="ag-theme-material w-100 my-4 ag-grid-table"
        :columnDefs="columnDefs"
        :defaultColDef="defaultColDef"
        :rowData="service_info_extract"
        rowSelection="multiple"
        colResizeDefault="shift"
        :animateRows="true"
        :floatingFilter="true"
        :pagination="true"
        :paginationPageSize="paginationPageSize"
        :suppressPaginationPanel="true"
        @selectionChanged="getSelectedRows"
      >
      </ag-grid-vue>
      <vs-pagination
        :total="totalPages"
        :max="maxPageNumbers"
        v-model="currentPage" />
      <!-- <VuePerfectScrollbar ref="agGridTablePs" class="scroll-area" :settings="psSettings" /> -->
    </vx-card>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue"

export default {
  components: {
    AgGridVue
  },
  data() {
    return {
      selected: [],
      service_info_extract: [],
      searchQuery: '',
      gridOptions: {},
      maxPageNumbers: 5,
      gridApi: null,
      defaultColDef: {
        sortable: true,
        editable: false,
        resizable: true,
        suppressMenu: true
      },
      columnDefs: [
        {
          headerName: 'ឆ្នាំសិក្សា',
          field: 'year',
          filter: true,
          width: 150,
          pinned: 'left'
        },
        {
          headerName: 'ឈ្នោះ',
          field: 'name',
          width: 250,
          filter: true,
          checkboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          headerCheckboxSelection: true,
        },
        {
          headerName: 'ឈ្នោះឡាតាំង',
          field: 'latin',
          filter: true,
          width: 250,
        },
        {
          headerName: 'ភេទ',
          field: 'gender',
          filter: true,
          width: 150,
        },
        {
          headerName: 'ថ្ងៃខែឆ្នាំកំណើត',
          field: 'dob',
          filter: true,
          width: 150,
        },
        {
          headerName: 'ប្រើប្រាស់',
          field: 'service',
          filter: true,
          width: 300,
        },
        {
          headerName: 'ថ្ងៃបង់លុយ',
          field: 'date_pay',
          filter: true,
          width: 150,
        },
        {
          headerName: 'បង់វគ្គមុន',
          field: 'last_term',
          filter: "agNumberColumnFilter",
          width: 150,
        },
      ],
    }
  },
  watch: {
    '$store.state.windowWidth'(val) {
      if(val <= 576) {
        this.maxPageNumbers = 4;
        this.gridOptions.columnApi.setColumnPinned('email', null);
      }
      else this.gridOptions.columnApi.setColumnPinned('email', 'left')
    }
  },
  async created() {
    await this.$store.dispatch('fetchServiceInfos');
    let sie = this.service_info_extract;
    let raw = this.getServiceInfos;
    raw.map(async function (data) {
      sie.push({
        id         : data.id,
        year       : data.year,
        student_id : data.students.id,
        name       : data.students.name,
        latin      : data.students.latin,
        gender     : data.students.gender,
        dob        : data.students.dob,
        service    : data.services.type+'-'+ data.services.service,
        date_pay   : data.date_pay,
        last_term  : data.last_term,
        is_used    : data.is_used === true? 'នៅប្រើ' : 'បានផ្អាក' ,
      })
    });
  },
  computed: {
    getServiceInfos(){
      return this.$store.getters.get_service_infos
    },
    paginationPageSize() {
      if(this.gridApi) return this.gridApi.paginationGetPageSize();
      else return 50
    },
    totalPages() {
      if(this.gridApi) return this.gridApi.paginationGetTotalPages();
      else return 0
    },
    currentPage: {
      get() {
        if(this.gridApi) return this.gridApi.paginationGetCurrentPage() + 1;
        else return 1
      },
      set(val) {
        this.gridApi.paginationGoToPage(val - 1);
      }
    }
  },
  methods: {
    getSelectedRows() {
      const selectedNodes = this.gridApi.getSelectedNodes();
      this.selected = selectedNodes.map( node => node.data );
    },
    updateSearchQuery(val) {
      this.gridApi.setQuickFilter(val);
    }
  },
  mounted() {
    this.gridApi = this.gridOptions.api;
    // const el = document.querySelector('.ag-body-viewport');
    // console.log(this.$refs.agGridTablePs)
    // this.$refs.agGridTablePs.__init(el)
    // this.$refs.agGridTablePs.update()
  }
}

</script>

<style lang="scss">
@import '@sass/vuexy/extraComponents/agGridStyleOverride.scss'
</style>
