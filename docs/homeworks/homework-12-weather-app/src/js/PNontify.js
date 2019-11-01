import PNotify from 'pnotify/dist/es/PNotify';

export default function setPNotifySettings() {
  PNotify.defaults.styling = 'material';
  PNotify.defaults.icons = 'material';
  PNotify.alert(
    'Нет прав доступа к геопозиции, используйте поиск по имени города',
  );
}
