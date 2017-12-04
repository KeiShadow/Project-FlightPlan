<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
        <div class="boxForm">




            <!--<div class="row">
                <div class="col">
                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                        <div class="input-group-addon ui-widget">
                            <img src="img/aeroplane.png" alt=""/>
                        </div>
                        <input placeholder="From" name="srchFrom" class="form-control" id="srchFrom" list="datalistFrom"> 
                        <datalist id="datalistFrom"> </datalist>
                    </div> 
                </div>    
                <div class="col">

                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                        <div class="input-group-addon">
                            <img src="img/aeroplane.png" alt=""/>
                        </div>
                        <input placeholder="To" name="srchTo" class="form-control" id="srchTo" list="datalistTo">
                        <datalist id="datalistTo"></datalist>
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="col">
                    <div class="input-group mb-2 mr-sm-2 mb-sm-0 date" data-provide="datepicker">
                        <div class="input-group-addon">
                            <img src="img/calendar.png" alt=""/>
                            Departure
                        </div>
                        <input class="datepicker form-control" id="departure" data-date-format="mm/dd/yyyy">
                    </div>
                </div>
                <div class="col">
                    <div class="input-group mb-2 mr-sm-2 mb-sm-0 date" data-provide="datepicker">

                        <div class="input-group-addon">
                            <img src="img/calendar.png" alt=""/>
                            Return
                        </div>
                        <input class="datepicker form-control" id="return" data-date-format="mm/dd/yyyy">
                    </div>
                </div>
            </div>

            <input class="btn btn-primary" type="button" type="submit" value="Submit" onclick="getFlights(this)">

            <span id="obsah"></span>-->
        </div>
    <div class='boxMap'>
        <div id='map'></div>
    </div>
    

</asp:Content>
