/****************************************************************************
** Meta object code from reading C++ file 'qtcpclient.h'
**
** Created: Thu Jun 21 17:16:10 2012
**      by: The Qt Meta Object Compiler version 63 (Qt 4.8.1)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include "../qtcpclient.h"
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'qtcpclient.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 63
#error "This file was generated using the moc from 4.8.1. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
static const uint qt_meta_data_QTcpClient[] = {

 // content:
       6,       // revision
       0,       // classname
       0,    0, // classinfo
       5,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       1,       // signalCount

 // signals: signature, parameters, type, tag, flags
      24,   12,   11,   11, 0x05,

 // slots: signature, parameters, type, tag, flags
      76,   11,   11,   11, 0x08,
      97,   11,   11,   11, 0x08,
     127,  115,   11,   11, 0x08,
     169,   11,   11,   11, 0x08,

       0        // eod
};

static const char qt_meta_stringdata_QTcpClient[] = {
    "QTcpClient\0\0strMsg,type\0"
    "NotifyMessage(QString,QManipulateIniFile::LogTypes)\0"
    "HandleDisconnected()\0HandleConnected()\0"
    "socketError\0HandleError(QAbstractSocket::SocketError)\0"
    "IncomingData()\0"
};

void QTcpClient::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    if (_c == QMetaObject::InvokeMetaMethod) {
        Q_ASSERT(staticMetaObject.cast(_o));
        QTcpClient *_t = static_cast<QTcpClient *>(_o);
        switch (_id) {
        case 0: _t->NotifyMessage((*reinterpret_cast< QString(*)>(_a[1])),(*reinterpret_cast< QManipulateIniFile::LogTypes(*)>(_a[2]))); break;
        case 1: _t->HandleDisconnected(); break;
        case 2: _t->HandleConnected(); break;
        case 3: _t->HandleError((*reinterpret_cast< QAbstractSocket::SocketError(*)>(_a[1]))); break;
        case 4: _t->IncomingData(); break;
        default: ;
        }
    }
}

const QMetaObjectExtraData QTcpClient::staticMetaObjectExtraData = {
    0,  qt_static_metacall 
};

const QMetaObject QTcpClient::staticMetaObject = {
    { &QTcpSocket::staticMetaObject, qt_meta_stringdata_QTcpClient,
      qt_meta_data_QTcpClient, &staticMetaObjectExtraData }
};

#ifdef Q_NO_DATA_RELOCATION
const QMetaObject &QTcpClient::getStaticMetaObject() { return staticMetaObject; }
#endif //Q_NO_DATA_RELOCATION

const QMetaObject *QTcpClient::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->metaObject : &staticMetaObject;
}

void *QTcpClient::qt_metacast(const char *_clname)
{
    if (!_clname) return 0;
    if (!strcmp(_clname, qt_meta_stringdata_QTcpClient))
        return static_cast<void*>(const_cast< QTcpClient*>(this));
    return QTcpSocket::qt_metacast(_clname);
}

int QTcpClient::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QTcpSocket::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        if (_id < 5)
            qt_static_metacall(this, _c, _id, _a);
        _id -= 5;
    }
    return _id;
}

// SIGNAL 0
void QTcpClient::NotifyMessage(QString _t1, QManipulateIniFile::LogTypes _t2)
{
    void *_a[] = { 0, const_cast<void*>(reinterpret_cast<const void*>(&_t1)), const_cast<void*>(reinterpret_cast<const void*>(&_t2)) };
    QMetaObject::activate(this, &staticMetaObject, 0, _a);
}
QT_END_MOC_NAMESPACE