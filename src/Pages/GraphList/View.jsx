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
import { Sidebar } from 'primereact/sidebar';
import Graph from "react-vis-network-graph";

const View = () => {

    // Start - Sample Data
        const demo = [
            {
                id: 15,
                name: 'Resources Domain',
                href: 'Lorem ipsum dolor sit amet',
                version: 'dolor sit amet',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue sit amet augue sit amet lacinia.',
            },
            {
                id: 26,
                name: 'Shelf',
                href: 'Lorem ipsum dolor sit amet',
                version: 'dolor sit amet',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue sit amet augue sit amet lacinia.',
            },
            {
                id: 37,
                name: 'Port',
                href: 'Lorem ipsum dolor sit amet',
                version: 'dolor sit amet',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue sit amet augue sit amet lacinia.',
            },
            {
                id: 48,
                name: 'Fish',
                href: 'Lorem ipsum dolor sit amet',
                version: 'dolor sit amet',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue sit amet augue sit amet lacinia.',
            },
            {
                id: 59,
                name: 'Resources Domain',
                href: 'Lorem ipsum dolor sit amet',
                version: 'dolor sit amet',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue sit amet augue sit amet lacinia.',
            },
            {
                id: 64,
                name: 'Shelf',
                href: 'Lorem ipsum dolor sit amet',
                version: 'dolor sit amet',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue sit amet augue sit amet lacinia.',
            },
            {
                id: 75,
                name: 'Port',
                href: 'Lorem ipsum dolor sit amet',
                version: 'dolor sit amet',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue sit amet augue sit amet lacinia.',
            },
            {
                id: 86,
                name: 'Fish',
                href: 'Lorem ipsum dolor sit amet',
                version: 'dolor sit amet',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue sit amet augue sit amet lacinia.',
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
    // Start - Graph Data
    const options = {
        layout: {
          hierarchical: false
        },
        edges: {
          color: "#000000"
        }
    };
    const [state, setState] = useState({
        counter: 5,
        graph: {
          nodes: [
            { id: 1, label: "Node 1", title: "node 1 tootip text", color: "#e04141" },
            { id: 2, label: "Node 2", title: "node 2 tootip text", color: "#e09c41" },
            { id: 3, label: "Node 3", title: "node 3 tootip text", color: "#e0df41" },
            { id: 4, label: "Node 4", title: "node 4 tootip text", color: "#7be041" },
            { id: 5, label: "Node 5", title: "node 5 tootip text", color: "#41e0c9" }
          ],
          edges: [
            { from: 1, to: 2 },
            { from: 1, to: 3 },
            { from: 2, to: 4 },
            { from: 2, to: 5 }
          ]
        },
        events: {
          select: ({ nodes, edges }) => {
            console.log("Selected nodes:");
            console.log(nodes);
            console.log("Selected edges:");
            console.log(edges);
            alert("Selected node: " + nodes);
          }
        }
      })
      const { graph, events } = state;
    // End - Graph Data


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
                <Button icon="pi pi-chart-line" tooltip='View Graph' rounded outlined className="mr-2 p-button-edit" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" tooltip='Delete Data' rounded outlined className="p-button-delete" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    };
    const header = (<>
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
        </div>
        
        <div className="grid align-items-center">
            <div className="col-12 md:col-7 lg:col-8 xl:col-9">
                <div className='flex align-items-center gap-4'>
                    <span className="text-2xl text-900 font-bold mb-5 md:mb-0">Graph List</span>
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
        <Sidebar visible={editDialog} header="Details" modal blockScroll className="w-8" onHide={hideDialog}>   
        <div>
            <Graph graph={graph} options={options} events={events} style={{ height: "640px" }} />
        </div>
        <div className="p-fluid grid">
            <div className="col-6">
                <div className="field">
                    <label>ID</label>
                    <InputText type="text" value={tableValue.id} onChange={(e) => onInputChange(e, 'id')} />
                </div>
            </div>
            <div className="col-6">
                <div className="field">
                    <label>Name</label>
                    <InputText type="text" value={tableValue.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !tableValue.name })} />
                </div>
            </div>
            <div className="col-6">
                <div className="field">
                    <label>Href</label>
                    <InputText type="text" value={tableValue.href} onChange={(e) => onInputChange(e, 'href')} />
                </div>
            </div>
            <div className="col-6">
                <div className="field">
                    <label>Version</label>
                    <InputText type="text" value={tableValue.version} onChange={(e) => onInputChange(e, 'version')} />
                </div>
            </div>
            <div className="col-12">
                <div className="field">
                    <label>Description</label>
                    <InputTextarea autoResize value={tableValue.description} onChange={(e) => onInputChange(e, 'description')} required autoFocus className={classNames({ 'p-invalid': submitted && !tableValue.name })} />
                </div>
            </div>
        </div>
        <div className='flex gap-2 justify-content-end align-items-center'>
            <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
        </div>
        </Sidebar>
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