import Vue from 'vue'
// 导入 组件
import {
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Button,
  Container,
  Aside,
  Header,
  Main,
  Footer,
  Badge,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input,
  Row,
  Col,
  Tooltip,
  Tabs,
  TabPane,
  Carousel,
  CarouselItem,
  Pagination,
  Tag,
  Breadcrumb,
  BreadcrumbItem,
  Collapse,
  CollapseItem,
  Dialog,
  Radio,
  RadioGroup,
  RadioButton,
  Select,
  Option,
  Table,
  TableColumn,
  Loading,
  Scrollbar,
  Popover,
  Checkbox,
  CheckboxGroup,
  CheckboxButton,
  Autocomplete,
  Tree,
  Progress,
  Form,
  FormItem,
  Upload,
  DatePicker,
  ButtonGroup,
  MessageBox,
  Message,
  Slider,
  Switch,
  Rate,
  ColorPicker,
  Cascader,
  Steps,
  Step,
  Transfer,
  InputNumber,
} from 'element-ui'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
Vue.prototype.$ELEMENT = { size: 'small' }
//调用 组件
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Button)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Badge)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Row)
Vue.use(Col)
Vue.use(Tooltip)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Pagination)
Vue.use(Tag)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Dialog)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Select)
Vue.use(Option)
Vue.use(Option)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Loading)
Vue.use(Scrollbar)
Vue.use(Popover)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Autocomplete)
Vue.use(Tree)
Vue.use(Progress)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Upload)
Vue.use(DatePicker)
Vue.use(ButtonGroup)
Vue.use(Slider)
Vue.use(Switch)
Vue.use(Rate)
Vue.use(ColorPicker)
Vue.use(Cascader)
Vue.use(Step)
Vue.use(Steps)
Vue.use(Transfer)
Vue.component(CollapseTransition.name, CollapseTransition)

// Vue.use(Message)
// Vue.prototype.$loading = Loading.service
// Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
// Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
