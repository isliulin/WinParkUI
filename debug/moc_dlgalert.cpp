/****************************************************************************
** Meta object code from reading C++ file 'dlgalert.h'
**
** Created: Fri Apr 20 18:07:32 2012
**      by: The Qt Meta Object Compiler version 62 (Qt 4.7.4)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include "../Dialog/dlgalert.h"
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'dlgalert.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 62
#error "This file was generated using the moc from 4.7.4. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
static const uint qt_meta_data_CDlgAlert[] = {

 // content:
       5,       // revision
       0,       // classname
       0,    0, // classinfo
       2,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       0,       // signalCount

 // slots: signature, parameters, type, tag, flags
      22,   11,   10,   10, 0x08,
      61,   10,   10,   10, 0x08,

       0        // eod
};

static const char qt_meta_stringdata_CDlgAlert[] = {
    "CDlgAlert\0\0row,column\0"
    "on_tabAlert_cellDoubleClicked(int,int)\0"
    "on_lblClose_linkActivated(QString)\0"
};

const QMetaObject CDlgAlert::staticMetaObject = {
    { &QDialog::staticMetaObject, qt_meta_stringdata_CDlgAlert,
      qt_meta_data_CDlgAlert, 0 }
};

#ifdef Q_NO_DATA_RELOCATION
const QMetaObject &CDlgAlert::getStaticMetaObject() { return staticMetaObject; }
#endif //Q_NO_DATA_RELOCATION

const QMetaObject *CDlgAlert::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->metaObject : &staticMetaObject;
}

void *CDlgAlert::qt_metacast(const char *_clname)
{
    if (!_clname) return 0;
    if (!strcmp(_clname, qt_meta_stringdata_CDlgAlert))
        return static_cast<void*>(const_cast< CDlgAlert*>(this));
    return QDialog::qt_metacast(_clname);
}

int CDlgAlert::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QDialog::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        switch (_id) {
        case 0: on_tabAlert_cellDoubleClicked((*reinterpret_cast< int(*)>(_a[1])),(*reinterpret_cast< int(*)>(_a[2]))); break;
        case 1: on_lblClose_linkActivated((*reinterpret_cast< QString(*)>(_a[1]))); break;
        default: ;
        }
        _id -= 2;
    }
    return _id;
}
QT_END_MOC_NAMESPACE
