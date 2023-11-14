import React, { useState, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';

const View = () => {

    // Start - Sample Data
    const demo = [
        {
            id: 1,
            name: 'Resources Domain',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue sit amet augue sit amet lacinia.',
            href: 'Lorem ipsum dolor sit amet',
            version: 'dolor sit amet',
            baseType: 'Duis congue sit amet',
            reffredType: 'augue sit amet',
            schemaLocation: 'amet lacinia',
            type: 'dolor sit amet, consectetur'
        },
        {
            id: 2,
            name: 'Shelf',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue sit amet augue sit amet lacinia.',
            href: 'Lorem ipsum dolor sit amet',
            version: 'dolor sit amet',
            baseType: 'Duis congue sit amet',
            reffredType: 'augue sit amet',
            schemaLocation: 'amet lacinia',
            type: 'dolor sit amet, consectetur'
        },
        {
            id: 3,
            name: 'Port',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue sit amet augue sit amet lacinia.',
            href: 'Lorem ipsum dolor sit amet',
            version: 'dolor sit amet',
            baseType: 'Duis congue sit amet',
            reffredType: 'augue sit amet',
            schemaLocation: 'amet lacinia',
            type: 'dolor sit amet, consectetur'
        },
        {
            id: 4,
            name: 'Fish',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue sit amet augue sit amet lacinia.',
            href: 'Lorem ipsum dolor sit amet',
            version: 'dolor sit amet',
            baseType: 'Duis congue sit amet',
            reffredType: 'augue sit amet',
            schemaLocation: 'amet lacinia',
            type: 'dolor sit amet, consectetur'
        },
        {
            id: 5,
            name: 'Resources Domain',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue sit amet augue sit amet lacinia.',
            href: 'Lorem ipsum dolor sit amet',
            version: 'dolor sit amet',
            baseType: 'Duis congue sit amet',
            reffredType: 'augue sit amet',
            schemaLocation: 'amet lacinia',
            type: 'dolor sit amet, consectetur'
        },
        {
            id: 6,
            name: 'Shelf',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue sit amet augue sit amet lacinia.',
            href: 'Lorem ipsum dolor sit amet',
            version: 'dolor sit amet',
            baseType: 'Duis congue sit amet',
            reffredType: 'augue sit amet',
            schemaLocation: 'amet lacinia',
            type: 'dolor sit amet, consectetur'
        },
        {
            id: 7,
            name: 'Port',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue sit amet augue sit amet lacinia.',
            href: 'Lorem ipsum dolor sit amet',
            version: 'dolor sit amet',
            baseType: 'Duis congue sit amet',
            reffredType: 'augue sit amet',
            schemaLocation: 'amet lacinia',
            type: 'dolor sit amet, consectetur'
        },
        {
            id: 8,
            name: 'Fish',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue sit amet augue sit amet lacinia.',
            href: 'Lorem ipsum dolor sit amet',
            version: 'dolor sit amet',
            baseType: 'Duis congue sit amet',
            reffredType: 'augue sit amet',
            schemaLocation: 'amet lacinia',
            type: 'dolor sit amet, consectetur'
        },
    ]
    const indexContainer = (rowData) => {
        return (<>
            {rowData.id && <Tag value={rowData.id} className="bg-teal-100 text-teal-900 text-base px-3" /> } 
        </>);
    };
    const columnDemo = [
        {field: 'id', header: 'ID', headerStyle: { width: '72px' }, body: indexContainer },
        {field: 'name', header: 'Name'},
        {field: 'description', header: 'Description'},
    ];
    // End - Sample Data


    const value = demo
    const columns = columnDemo
    const emptyTableValue = {
        id: '',
        name: '',
        href: '',
        description: '',
        version: '',
        baseType: '',
        reffredType: '',
        schemaLocation: '',
        type: ''
    };
    const [tableValues, setTableValues] = useState(value);
    const [tableValue, setTableValue] = useState(emptyTableValue);
    const [editDialog, setEditDialog] = useState(false);
    const [deleteSingleDataDialog, setDeleteSingleDataDialog] = useState(false);
    const [deleteMultipleDataDialog, setDeleteMultipleDataDialog] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState('');
    const toast = useRef(null);
    const dt = useRef(null);

    const hideDialog = () => {
        setSubmitted(false);
        setEditDialog(false);
    };
    const hideDeleteProductDialog = () => {
        setDeleteSingleDataDialog(false);
    };
    const hideDeleteProductsDialog = () => {
        setDeleteMultipleDataDialog(false);
    };
    const saveProduct = () => {
        setSubmitted(true);

        if (tableValue.name.trim()) {
            let _dataTableValues = [...tableValues];
            let _dataTableValue = { ...tableValue };

            if (tableValue.id) {
                const index = findIndexById(tableValue.id);

                _dataTableValues[index] = _dataTableValue;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            } else {
                _dataTableValue.id = createId();
                _dataTableValue.image = 'product-placeholder.svg';
                _dataTableValues.push(_dataTableValue);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            setTableValues(_dataTableValues);
            setEditDialog(false);
            setTableValue(emptyTableValue);
        }
    };
    const editProduct = (tableValue) => {
        setTableValue({ ...tableValue });
        setEditDialog(true);
    };
    const confirmDeleteProduct = (tableValue) => {
        setTableValue(tableValue);
        setDeleteSingleDataDialog(true);
    };
    const deleteProduct = () => {
        let _dataTableValues = tableValues.filter((val) => val.id !== tableValue.id);

        setTableValues(_dataTableValues);
        setDeleteSingleDataDialog(false);
        setTableValue(emptyTableValue);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    };
    const findIndexById = (id) => {
        let index = -1;

        for (let i = 0; i < tableValues.length; i++) {
            if (tableValues[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    };
    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return id;
    };
    const deleteSelectedProducts = () => {
        let _dataTableValues = tableValues.filter((val) => !selectedProducts.includes(val));

        setTableValues(_dataTableValues);
        setDeleteMultipleDataDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    };
    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _dataTableValue = { ...tableValue };

        _dataTableValue[`${name}`] = val;

        setTableValue(_dataTableValue);
    };
    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2 p-button-edit" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" rounded outlined className="p-button-delete" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    };
    const header = (<>
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
        </div>
        
        <div className="grid align-items-center">
            <div className="col-12 md:col-7 lg:col-8 xl:col-9">
                <div className='flex align-items-center gap-4'>
                    <span className="text-2xl text-900 font-bold mb-5 md:mb-0">Vertex Specification</span>
                    {selectedProducts != null && (selectedProducts.length >= 2) && <Button size='small' outlined label="Delete Selected Data" icon="pi pi-trash" severity="danger" onClick={() => confirmDeleteSelected()} disabled={!selectedProducts != null && (selectedProducts.length <= 1)} />}
                </div>
            </div>
            <div className="col-12 md:col-5 lg:col-4 xl:col-3"> 
                <span className="p-input-icon-left w-full">
                    <i className="pi pi-search" />
                    <InputText className="w-full" type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
                </span>
            </div>
        </div>
    </>
    );
    const editDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
        </React.Fragment>
    );
    const deleteSingleDataDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteProduct} />
        </React.Fragment>
    );
    const deleteMultipleDataDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );
    const confirmDeleteSelected = () => {
        setDeleteMultipleDataDialog(true);
    };

    return ( <>
        <Toast ref={toast} />
        <div className="body">
            <div className="container">
                <div className="section">
                    <div className="card--v1">
                        <DataTable tableStyle={{minWidth: '50rem'}}
                            scrollable scrollHeight="calc(100vh - 50px)" ref={dt} value={tableValues} selection={selectedProducts}
                            onSelectionChange={(e) => setSelectedProducts(e.value)}
                            dataKey="id"  paginator rows={5} rowsPerPageOptions={[5, 10, 25]}
                            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" globalFilter={globalFilter} header={header}>
                                <Column selectionMode="multiple" exportable={false} style={{width: '1.5rem'}}></Column>
                                <Column header='Action' body={actionBodyTemplate} exportable={false} style={{ width: '10rem' }}></Column>
                                
                                {columns.map((col, i) => ( <Column {...col} /> ))}
                        </DataTable>
                    </div>
                </div>
            </div>
        </div>
{/* Start - Edit Data */}
        <Dialog visible={editDialog} style={{ width: '48rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Details" modal blockScroll className="p-fluid" footer={editDialogFooter} onHide={hideDialog}>                  
        <div className="p-fluid">
            <div className="field">
                <label>ID</label>
                <InputText type="text" value={tableValue.id} onChange={(e) => onInputChange(e, 'id')} />
            </div>
            <div className="field">
                <label>Name</label>
                <InputText type="text" value={tableValue.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !tableValue.name })} />
            </div>
            <div className="field">
                <label>Href</label>
                <InputText type="text" value={tableValue.href} onChange={(e) => onInputChange(e, 'href')} />
            </div>
            <div className="field">
                <label>Version</label>
                <InputText type="text" value={tableValue.version} onChange={(e) => onInputChange(e, 'version')} />
            </div>
            <div className="field">
                <label>Description</label>
                <InputTextarea autoResize value={tableValue.description} onChange={(e) => onInputChange(e, 'description')} required autoFocus className={classNames({ 'p-invalid': submitted && !tableValue.name })} />
            </div>
            <div className="field">
                <label>@baseType</label>
                <InputText type="text" value={tableValue.baseType} onChange={(e) => onInputChange(e, 'baseType')} />
            </div>
            <div className="field">
                <label>@reffredType</label>
                <InputText type="text" value={tableValue.reffredType} onChange={(e) => onInputChange(e, 'reffredType')} />
            </div>
            <div className="field">
                <label>@schemaLocation</label>
                <InputText type="text" value={tableValue.schemaLocation} onChange={(e) => onInputChange(e, 'schemaLocation')} />
            </div>
            <div className="field">
                <label>@type</label>
                <InputText type="text" value={tableValue.type} onChange={(e) => onInputChange(e, 'type')} />
            </div>
        </div>
        </Dialog>
{/* End - Edit Data */}

{/* Start - Delete one data */}
        <Dialog visible={deleteSingleDataDialog} style={{ width: '48rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteSingleDataDialogFooter} onHide={hideDeleteProductDialog}>
            <div className="confirmation-content">
                <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                {tableValue && (
                    <span>
                        Are you sure you want to delete <b>{tableValue.name}</b>?
                    </span>
                )}
            </div>
        </Dialog>
{/* End - Delete one data */}

{/* Start - Delete multiple data */}
        <Dialog visible={deleteMultipleDataDialog} style={{ width: '48rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteMultipleDataDialogFooter} onHide={hideDeleteProductsDialog}>
            <div className="confirmation-content">
                <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                {tableValue && <span>Are you sure you want to delete the selected Data?</span>}
            </div>
        </Dialog>
{/* End - Delete multiple data */}
    </> );
}

export default View