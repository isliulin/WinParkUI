/****************************************************************************
** Meta object code from reading C++ file 'qdlgconfig.h'
**
** Created: Wed Nov 7 12:42:47 2012
**      by: The Qt Meta Object Compiler version 63 (Qt 4.8.1)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include "../qdlgconfig.h"
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'qdlgconfig.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 63
#error "This file was generated using the moc from 4.8.1. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
static const uint qt_meta_data_QDlgConfig[] = {

 // content:
       6,       // revision
       0,       // classname
       0,    0, // classinfo
       2,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       0,       // signalCount

 // slots: signature, parameters, type, tag, flags
      12,   11,   11,   11, 0x08,
      31,   11,   11,   11, 0x08,

       0        // eod
};

static const char qt_meta_stringdata_QDlgConfig[] = {
    "QDlgConfig\0\0on_btnOK_clicked()\0"
    "on_btnCancel_clicked()\0"
};

void QDlgConfig::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    if (_c == QMetaObject::InvokeMetaMethod) {
        Q_ASSERT(staticMetaObject.cast(_o));
        QDlgConfig *_t = static_cast<QDlgConfig *>(_o);
        switch (_id) {
        case 0: _t->on_btnOK_clicked(); break;
        case 1: _t->on_btnCancel_clicked(); break;
        default: ;
        }
    }
    Q_UNUSED(_a);
}

const QMetaObjectExtraData QDlgConfig::staticMetaObjectExtraData = {
    0,  qt_static_metacall 
};

const QMetaObject QDlgConfig::staticMetaObject = {
    { &QDialog::staticMetaObject, qt_meta_stringdata_QDlgConfig,
      qt_meta_data_QDlgConfig, &staticMetaObjectExtraData }
};

#ifdef Q_NO_DATA_RELOCATION
const QMetaObject &QDlgConfig::getStaticMetaObject() { return staticMetaObject; }
#endif //Q_NO_DATA_RELOCATION

const QMetaObject *QDlgConfig::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->metaObject : &staticMetaObject;
}

void *QDlgConfig::qt_metacast(const char *_clname)
{
    if (!_clname) return 0;
    if (!strcmp(_clname, qt_meta_stringdata_QDlgConfig))
        return static_cast<void*>(const_cast< QDlgConfig*>(this));
    return QDialog::qt_metacast(_clname);
}

int QDlgConfig::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QDialog::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        if (_id < 2)
            qt_static_metacall(this, _c, _id, _a);
        _id -= 2;
    }
    return _id;
}
QT_END_MOC_NAMESPACE